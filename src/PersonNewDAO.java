package edu.simpson.cis.cis320;

import javax.naming.Context;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InitialContext;
import javax.sql.DataSource;

import static jdk.nashorn.internal.runtime.regexp.joni.Config.log;

public class PersonNewDAO {
    private final static Logger log = Logger.getLogger(edu.simpson.cis.cis320.PersonDAO.class.getName());

    public static void getPeople(Person person) {
        //Person person = new Person();
        log.log(Level.FINE, "Get people");

        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        try {
            conn = DBHelper.getConnection();

            String sql = "Insert INTO cis320.person (first, last, email, phone, birthday) VALUES (first, last, email, phone, birthday)";

            // If you had parameters, it would look something like
            // String sql = "select id, first, last, phone from person where id = ?";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);

            // If you had parameters, they would be set wit something like:
            stmt.setString(1, "firstname");
            stmt.setString(1, "lastname");
            stmt.setString(1, "email");
            stmt.setString(1, "phone");
            stmt.setString(1, "birthday");

            rs = stmt.executeQuery();

        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se );
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e );
        } finally {
            // Ok, close our result set, statement, and connection
            try { rs.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { stmt.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { conn.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
        }
    }
}