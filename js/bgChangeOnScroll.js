var body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'white';
        window.onscroll = function (event) {
            var scroll = window.scrollY;
            var windowX = window. screen.width;
            if (windowX>=700){
                if (scroll < 1200) {
                    // green
                    body.style.backgroundColor = '#ffff';
                } else if (scroll >= 200 && scroll < 2000) {
                    // yellow
                    body.style.backgroundColor = '#e2e2e2';
                    
                } else if (scroll >= 2100 && scroll < 2200) {
                    // orange
                    body.style.backgroundColor = '#deffff';
                } else if (scroll >= 2000 && scroll < 2900) {
                    // red
                    body.style.backgroundColor = '#deffff';
                } else if (scroll >= 2900 && scroll < 3800) {
                    // red
                    body.style.backgroundColor = '#F8EEDE';
                }else {
                    // purple
                    body.style.backgroundColor = '#F5F5F7';
                }
            } if (windowX<=700) {
                body.style.backgroundColor='#F5F5F7'
            }
        }