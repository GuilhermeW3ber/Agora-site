var body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'white';
        window.onscroll = function (event) {
            var scroll = window.scrollY;
            var windowX = window. screen.width;
            if (windowX>=990){
                if (scroll < 300) {
                    // green
                //     body.style.backgroundColor = '#242424';
                //  } else if (scroll >= 200 && scroll < 1000) {
                //      // yellow
                    body.style.backgroundColor = '#fff';
                    
                } else if (scroll >= 500 && scroll < 2000) {
                    // yellow
                    body.style.backgroundColor = '#F8EEDE';
                    
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
            } else {
                body.style.backgroundColor = '#fffff';
            }
            
        }
