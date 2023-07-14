// ищем кнопки в документе
const buttons = document.querySelectorAll('.btn-calc');

const rotate = (slide, classList) => { //функция подсчёта угла поворота кнопок
	const isProfile = classList.contains('profile');
	if (isProfile) {
		const profileRight = 7; //средний слайд, профиль справа
		const profileLeft = 19;
	if (slide === profileRight && classList.contains('profile-right')) return 0;
	if (slide === profileLeft && classList.contains('profile-left')) return 0;
	return 90;
	}

	if (slide <= 1) return 0;

	if (slide < 4 || slide > 22) {
		return slide * 15 - 15;
	}
	else if (slide > 11 && slide < 15) {
		return slide * 15 - 15;
	}
	return 90;
};

(function($){
	$.fn.image360 = function(options) {
		
		// настройки
		var settings = $.extend( {
			'count_loop': 1, // количество оборотов на ширину блока
		}, options);
		
		var $main_div = this, // блок с картинками
			div_width, // ширирна блока
			count_imgs = 0, // количество картинок
			start_drag = false, // старт анимации
			position_X = 0, // положение курсора над картинкой
			index_img = 0, // индекс отображаемой картинки
			last_perc = 0, // предыдущее положение курсора относительно блока в процентах
			direction = true; // напавление движения мыши true - влево, false -  вправо
						
		var methods = {
			
			init: function(settings) { 	
				// ширина блока
				div_width = $main_div.width();
				// подготовка картинок
				$main_div.find("img").each(function(num){
					if(num != 0){
						$(this).hide();
					}
				});
				count_imgs = $main_div.find("img").length;
			},
			
			move_imgs: function(positionX){
				if(positionX < 0 ) positionX = 0;
				if(positionX > div_width) positionX = div_width;
				var percent_div = (positionX / div_width) * 100;
				var percent_img = 100 / (settings.count_loop * count_imgs); 	
				if( Math.abs(percent_div - last_perc) > percent_img){
					last_perc = percent_div;	
					if(direction){
						index_img--;
					}else{
						index_img++;
					}
					if(index_img < 0) index_img = (count_imgs - 1);
					if(index_img > (count_imgs - 1)) index_img = 0;
					// тут мы врезаемся в события jQuery и меняем поворот кнопок
					// index_img + 1 потому что номер слайда тут считается индексом, а нам нужен номер

					const slidePoints = [1, 2, 3, 7, 12, 13, 14, 19, 23, 24];
					buttons.forEach((button) => {
						const { classList } = button;
						if (classList.contains('active') && !slidePoints.includes(index_img + 1)) {
							classList.remove('active', 'animate__heartBeat');
							state.activeBlock.innerHTML = state.defaultBlock;
							state.activeButton = document.createElement('a');
						}
						if ((classList.contains('clavicle') || classList.contains('ribs')) && index_img > 10 && index_img < 16) {
							return window.screen.width > 768
							? button.style.transform = `rotateY(${rotate(index_img + 1, classList)}deg) translateY(2vw)`
							: button.style.transform = `rotateY(${rotate(index_img + 1, classList)}deg) translateY(6vw)`;
						}
						button.style.transform = `rotateY(${rotate(index_img + 1, classList)}deg)`;
					});
					$main_div.find("img").hide();
					$main_div.find("img").eq(index_img).show();
				}			
			},
			
			resize: function(){
				div_width = $main_div.width();
			},
			
		};
		
		$main_div.bind('mousedown touchstart touchmove touchend mousemove click', function (e) {				
			e.preventDefault();
			if(e.type === 'mousedown' || e.type === 'touchstart'){
				// клик или тач
				// старт
				start_drag = true;
				position_X = e.pageX;
				
			}else if(e.type === 'touchmove'){
				// движение тач
				if(start_drag){
					var touch = e.originalEvent.touches[0];
					// движение влево
					if(position_X > touch.pageX){
						direction = false;
					}
					// движение вправо
					if(position_X < touch.pageX){
						direction = true;
					}
					position_X = touch.pageX;
					var offset_div = $main_div.offset();
					var positionX = (touch.pageX - offset_div.left);
					// анимация
					methods.move_imgs(positionX);					
				}
			} else if (e.type === 'touchend') {
				// отпустили тач
				start_drag = false;
			}
		});
		
		// движение мышки
		$main_div.bind('mousemove', function (e) {
			e.preventDefault();
			if(start_drag){				
				// движение влево
				if(position_X > e.pageX){
					direction = false;
				}
				// движение вправо
				if(position_X < e.pageX){
					direction = true;
				}
				position_X = e.pageX;
				var offset_div = $main_div.offset();
				var positionX = (e.pageX - offset_div.left);
				// анимация
				methods.move_imgs(positionX);					
			}
		});
		
		// остановка, если отпустили конпку мышки
		$(document).bind('mouseup', function (e) {
			start_drag = false;
		});	
		
		$(window).resize(function() {
			methods.resize();
		});
			
		methods.init(settings);
	};
})( jQuery );