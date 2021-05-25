canvas = document.getElementById("myCanvas") ;
ctx = canvas.getContext("2d") ;
car_1_width = 100 ;
car_1_height = 70 ;
car_1_x = 10 ;
car_1_y = 5 ;
car_1_image = "images_1.png" ;
car_2_width = 100 ;
car_2_height = 90 ;
car_2_x = 10 ;
car_2_y = 50 ;
car_2_image = "images-_1.png";

track_images_array = [ "jk(0).png" , "jk (1).jpg" , "jk (2).jpg" , "jk (3).jpg" , "jk (4).jpg" , "jk (5).jpg" , "jk (6).jpg" ];
random_number = Math.floor(Math.random() * 7 );
background_image = track_images_array [random_number] ;

function add() {
   background_imgTag = new Image(); 
   background_imgTag.onload = uploadBackground;
   background_imgTag.src = background_image;

   car_1_imgTag = new Image(); 
   car_1_imgTag.onload = uploadCar1;
   car_1_imgTag.src = car_1_image;

   car_2_imgTag = new Image(); 
   car_2_imgTag.onload = uploadCar2;
   car_2_imgTag.src = car_2_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car_1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}

function uploadCar2() {
    ctx.drawImage(car_2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
   keyPressed = e.keyCode ;
   console.log(keyPressed) ;
      if (keyPressed == '38')
      {
         car_1_up();
         console.log("up arrow key");
      }
      if (keyPressed == '40')
      {
         car_1_down();
         console.log("down arrow key");
      }
      if (keyPressed == '37')
      {
         car_1_left();
         console.log("left arrow key");
      }
      if (keyPressed == '39')
      {
         car_1_right();
         console.log("right arrow key");
      }
      if (keyPressed == '87')
      {
         car_2_up();
         console.log("w key");
      }
      if (keyPressed == '83')
      {
         car_2_down();
         console.log("s key");
      }
      if (keyPressed == '65')
      {
         car_2_left();
         console.log("a key");
      }
      if (keyPressed == '68')
      {
         car_2_right();
         console.log("d key");
      }
      if (car_1_x > 700)
      {
         console.log("Car 1 Won")
         document.getElementById("game_status").innerHTML = "Car 1 WON!!" ;
      }
      if (car_2_x > 700)
      {
         console.log("Car 2 Won")
         document.getElementById("game_status").innerHTML = "Car 2 WON!!" ;
      }


}

function car_1_up()
{
     if(car_1_y >= 0 )
     {
        car_1_y = car_1_y - 10 ;
        console.log("When up arrow is pressed = " + car_1_x + " - " + car_1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();

     }

}

function car_1_down()
{
      if(car_1_y <= 500 )
      {
          car_1_y = car_1_y + 10 ;
          console.log("When down arrow is pressed = " + car_1_x + " + " + car_1_y);
          uploadBackground();
          uploadCar1();
          uploadCar2();
      }

}

function car_1_left()
{
      if(car_1_x >= 0 )
      {
        car_1_x = car_1_x - 10 ;
        console.log("When left arrow is pressed = " + car_1_y + " - " + car_1_x);
        uploadBackground();
        uploadCar1();
        uploadCar2();

      }

}

function car_1_right()
{
      if(car_1_x <= 700 )
      {
          car_1_x = car_1_x + 10 ;
          console.log("When down arrow is pressed = " + car_1_y + " + " + car_1_x);
          uploadBackground();
          uploadCar1();
          uploadCar2();
      }

}

function car_2_up()
{
     if(car_2_y >= 0 )
     {
        car_2_y = car_2_y - 10 ;
        console.log("When w is pressed = " + car_2_x + " - " + car_2_y);
        uploadBackground();
        uploadCar2();
        uploadCar1();

     }

}

function car_2_down()
{
      if(car_2_y <= 500 )
      {
          car_2_y = car_2_y + 10 ;
          console.log("When s is pressed = " + car_2_x + " + " + car_2_y);
          uploadBackground();
          uploadCar2();
          uploadCar1();
      }

}

function car_2_left()
{
      if(car_2_x >= 0 )
      {
        car_2_x = car_2_x - 10 ;
        console.log("When left arrow is pressed = " + car_2_y + " - " + car_2_x);
        uploadBackground();
        uploadCar2();
        uploadCar1();

      }

}

function car_2_right()
{
      if(car_2_x <= 700 )
      {
          car_2_x = car_2_x + 10 ;
          console.log("When down arrow is pressed = " + car_2_y + " + " + car_2_x);
          uploadBackground();
          uploadCar2();
          uploadCar1();
      }

}
