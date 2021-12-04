<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
 <link rel="stylesheet" href="layout.css">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device,initial-scale=1.0">
    <title>Registration Details</title>
</head>
<body>

<div class="heading">
        <table class="wrap">
            <fieldset>
                <legend>
                    <h1>Registration Details</h1>
                </legend>

                <tr>
                    <td>First Name :</td>
                    <td><input id="FN" type="text" name="First name" required ></td>
                   </tr>
                   <tr>
                <td>Last Name :</td>
                    <td><input id="LN" type="text" name="Last name" required></td>
                   </tr>
                   <tr>
                    <td>Username :</td>
                    <td><input id="UN" type="text" name="username" required></td>
                   </tr>
                   <tr>
                    <td>Password :</td>
                    <td><input id="PWD" type ="password" name ="password" required></td>
                   </tr>
                   <tr>
                  <td>Confirm Password :</td>
                    <td><input type ="password" name ="password" required></td>
                   </tr>
                   <tr>
                    <td>Gender :</td>
                    <td>
                     <input type="radio" name="gender" value="m" required>Male
                     <input type="radio" name="gender" value="f" required>Female
                    </td>
                   </tr>
                   <tr>
                    <td>Email :</td>
                    <td><input id="Email" type="email" name="email" required></td>
                   </tr> 
                   <tr>
                    <td>Phone no. :</td>
                    <td><input id="Phone" type="phone" name="phone" required>
                    </td>
                   </tr>
                   <tr>
                <td>Car registration no. :</td>
                    <td><input id="RegNo" type="text" name="Car registration no." required></td>
                   </tr>
                   <tr>
                <td>Residential address :</td>
                    <td><input id="Adress" type="text" name="Residential address" required></td>
                   </tr>
                   <tr>
                
                    <td><input id="SubmitButton" type="submit" value="Submit" name="submit"></td>
                   </tr>
                  
                 </form>

            </fieldset>

            
                

        </table>
    </div>

</body>
</html>