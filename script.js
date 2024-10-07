var boximage1 = document.querySelector('.box1');
        var boximage2 = document.querySelector('.box2');
        var boximage3 = document.querySelector('.box3');
        var imgArray = new Array();
        var imgNum = new Array();

        imgArray = [
            "C:\Users\소정\Desktop\images\jjang2.jpg",
            "C:\Users\소정\Desktop\images\jjang3.jpg",
            "C:\Users\소정\Desktop\images\jjang6.jpg"
        ]

        function changeimage() {
        imgNum = [];
        
        for (let i = 1; i <= 3; i++) {
            imgNum.push(Math.round(Math.random() * (imgArray.length)));
            document.querySelector('.box' + i).src = imgArray[imgNum[i]];
        }
        }