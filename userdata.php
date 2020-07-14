<?php
    if(isset($_POST['submit'])){
        $firstName = $_POST['firstName'];
        $lastName = $_POST['lastName'];
        $email = $_POST['email'];
        $number = $_POST['number'];
        $textArea = $_POST['textArea'];

        $to = 'maliksaifullah282@gmail.com';
        $subject = 'Form Submission';
        $message = "First Name: ".$firstName."\n"."Last Name: ".$lastName."\n"."Phone: ".$number."\n"."Wrote the following: "."\n\n".$textArea;
        $headers = "From: ".$email;

        if(mail($to,$subject,$message,$headers)){
            echo "<h1>Send Successfully! THank you"." ".$firstName", We will contact you shortly!</h1>";
        }else{
            echo "Something went wrong!";
        }
    }
?>