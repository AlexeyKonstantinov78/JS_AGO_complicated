
function DomElement(selector, height, width, background_bg, fontSize){
    this.selector =  selector;
    this.height =  height;
    this.width = width;
    this.background_bg = background_bg;
    this.fontSize = fontSize;
}

DomElement.prototype.select = function(){
    if (this.selector.substring(0, 1) === '.') {
        let div = document.createElement('div'),
             top = 0,
             left = 0;
            div.className = this.selector;
            div.innerHTML = 'Создали div с классом';
            document.querySelector('body').append(div);
            div.style.cssText = 'height: ' + _this.height +'px; width: ' + _this.width + 'px; background-color: ' + _this.background_bg + '; font-size: ' + _this.fontSize + 'px; position: absolute; top: ' + top + 'px; left: ' + left + 'px;';
            _this = this;
            document.addEventListener('keydown', function(event) {
                console.log(event.code);
                if (event.code == 'ArrowDown' ) {top += +10;}
                if (event.code == 'ArrowRight') {left += +10;}
                if (event.code == 'ArrowUp' && top >= 10) {top -= +10;}
                if (event.code == 'ArrowLeft' && left >= 10) {left -= +10;}
                    div.style.cssText = 'height: ' + _this.height +'px; width: ' + _this.width + 'px; background-color: ' + _this.background_bg + '; font-size: ' + _this.fontSize + 'px; position: absolute; top: ' + top + 'px; left: ' + left + 'px;';
            });
    }
    if (this.selector.substring(0, 1) === '#') {
        let p = document.createElement('p'),
            top = 0,
            left = 0;
            p.id = this.selector;
            p.innerHTML = 'Создали параграф с id';
            document.querySelector('body').append(p);
            p.style.cssText = 'height: ' + _this.height +'px; width: ' + _this.width + 'px; background-color: ' + _this.background_bg + '; font-size: ' + _this.fontSize + 'px; position: absolute; top: ' + top + 'px; left: ' + left + 'px;';
            _this = this;
            document.addEventListener('keydown', function(event) {
                console.log(event.code);
                if (event.code == 'ArrowDown' ) {top += +10;}
                if (event.code == 'ArrowRight') {left += +10;}
                if (event.code == 'ArrowUp' && top >= 10) {top -= +10;}
                if (event.code == 'ArrowLeft' && left >= 10) {left -= +10;}
                    p.style.cssText = 'height: ' + _this.height +'px; width: ' + _this.width + 'px; background-color: ' + _this.background_bg + '; font-size: ' + _this.fontSize + 'px; position: absolute; top: ' + top + 'px; left: ' + left + 'px;';
            });
    }
};
DomElement.prototype.DOMContentLoaded = function() {
    _this = this;
    window.addEventListener('DOMContentLoaded', function(){
        _this.select();
    });
};


let domElement1 = new DomElement('.des', 100, 100, 'red', 28);

domElement1.DOMContentLoaded();