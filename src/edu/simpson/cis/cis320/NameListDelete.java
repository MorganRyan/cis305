package edu.simpson.cis.cis320;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by Morgan on 2/28/2017.
 */
@WebServlet(name = "NameListDelete")
public class NameListDelete extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();
        out.println("Post");

        int idValue = Integer.parseInt(request.getParameter("id"));

        out.println("id='"+idValue+"'");

        PersonDAO.deletePerson(idValue);
    }
}

