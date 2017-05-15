window.onload = function(){
        var c = document.getElementById("fwCanvas");
        var twod = c.getContext("2d");
        c.width = window.innerWidth;
        c.height = window.innerHeight;


        window.addEventListener('resize', function () {
            c.width = window.innerWidth;
            c.height = window.innerHeight;
        }, false);


        var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
        matrix = matrix.split('');
        var fontSize = 10;
        var col = c.width / fontSize;
        var drops = [];
        for (var x = 0; x < col; x++)
            drops[x] = 1;

        function draw() {
            twod.fillStyle = 'rgba(0,0,0,0.04)';
            twod.fillRect(0, 0, c.width, c.height);
            twod.fillStyle = 'rgba(255, 0, 102,0.8)';
            twod.font = fontSize + 'px arial';

            for (var i = 0; i < drops.length; i++) {
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                twod.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > c.height && Math.random() > 0.975)
                    drops[i] = 0;
                drops[i]++;
            }
        }
		
		setInterval(draw, 15);

}
		