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

/**
 * Created by Morgan on 1/26/2017.
 */
@WebServlet(name = "NameListGet")
public class NameListGet extends javax.servlet.http.HttpServlet {
    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();
        public void updatePerson(Person person);
        Gson gson = new Gson();
        String json = gson.toJson(updatePerson);
        out.println(json);
    }
}
