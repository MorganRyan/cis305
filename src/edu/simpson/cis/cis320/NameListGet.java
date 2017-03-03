package edu.simpson.cis.cis320;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import com.google.gson.Gson;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by Morgan on 1/26/2017.
 */
@WebServlet(name = "NameListGet")
public class NameListGet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        List<Person> peopleList = PersonDAO.getPeople();
        Gson gson = new Gson();
        String json = gson.toJson(peopleList);
        out.println(json);
        }
    }
