<?php
 //Database connection
 $conn = mysqli_connect('localhost','root');
 if($conn){
    echo"Connection Successful";
 }else{
  echo"No Connection";
 }
 mysqli_select_db($conn, 'userinfodata');
 $Name = $_POST['Name'];
 $Email = $_POST['Email'];
 $Subject = $_POST['Subject'];
 $Comment = $_POST['Comment'];

 $query=" insert into tb_userdata(Name, Email, Subject, Comment)
 values ('$Name','$Email','$Subject','$Comment')";

 mysqli_query($conn, $query);

header('location: index.html')

?>