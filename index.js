var x = 0;
        var textEffect = "Welcome, To My Mini Project";
        var t = 0;
        var char = '!£$%^&*_=+*><;: ';
        var textContainer = document.querySelector('.textEffect');
        var effectContainer = document.querySelector('.effect');
        function innerAnimation(){
            if(t <char.length){
                effectContainer.innerHTML = char[t];
                t++;
                setTimeout(innerAnimation, 40);
            }
            else{
                textContainer.innerHTML += textEffect[x];
                x++;
                t=0;
                setTimeout(outerAnimation,50);
            }
        }
        function outerAnimation(){
            if(x < textEffect.length){
                innerAnimation();
            }
        }
        function start(){
            setTimeout(outerAnimation, 1000);
        }
        start();