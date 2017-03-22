package edu.simpson.cis.cis320;

import edu.simpson.cis.cis320.PersonDAO;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static jdk.nashorn.internal.objects.NativeString.length;

/**
 * Created by Morgan on 2/16/2017.
 */
@WebServlet(name = "NameListEdit")
public class NameListEdit extends HttpServlet {

    private Pattern firstNameValidationPattern;
    private Pattern lastNameValidationPattern;
    private Pattern emailValidationPattern;
    private Pattern phoneValidationPattern;
    private Pattern birthdayValidationPattern;

    public NameListEdit() {
        firstNameValidationPattern = Pattern.compile("^[A-Za-z]{1,10}$");
        lastNameValidationPattern = Pattern.compile("^[A-Za-z]{1,10}$");
        emailValidationPattern = Pattern.compile("^\\S+@\\S+\\.\\S+$");
        phoneValidationPattern = Pattern.compile("^[0-9]{10}$");
        birthdayValidationPattern = Pattern.compile("^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        // Print that this is a post
        out.println("Post");

        Integer id = 0;
       if (request.getParameter("id") != null && request.getParameter("id").length() > 0) {
            id = Integer.parseInt(request.getParameter("id"));
        }

        // Grab the data we got via a parameter
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String birthday = request.getParameter("birthday");

        // Just print the data out to confirm we got it.
        out.println("id='"+id+"'");
        out.println("firstName='"+firstName+"'");
        out.println("lastName='"+lastName+"'");
        out.println("email='"+email+"'");
        out.println("phone='"+phone+"'");
        out.println("birthday='"+birthday+"'");

        boolean validation = true;

        Matcher m = firstNameValidationPattern.matcher(firstName);
        if (m.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            out.println(false);
        }

        Matcher m1 = lastNameValidationPattern.matcher(lastName);
        if (m1.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            out.println(false);
        }

        Matcher m2 = emailValidationPattern.matcher(email);
        if (m2.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            out.println(false);
        }

        Matcher m3 = phoneValidationPattern.matcher(phone);
        if (m3.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            out.println(false);
        }

        Matcher m4 = birthdayValidationPattern.matcher(birthday);
        if (m4.find( )) {
            out.println("Passed validation");
        } else {
            out.println("Did not pass validation");
            out.println(false);
        }


        Person person = new Person();
        person.setId(id);
        person.setFirst(firstName);
        person.setLast(lastName);
        person.setEmail(email);
        person.setPhone(phone);
        person.setBirthday(birthday);

        if (validation == true && id == 0) {
            out.println("doesn't have id");
            PersonDAO.updatePerson(person);
        }
        if (validation == true && id != null) {
            out.println("has an id");
            PersonDAO.editPerson(person);
        }
    }
}
