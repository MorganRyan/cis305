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

public class PersonDAO {
    private final static Logger log = Logger.getLogger(edu.simpson.cis.cis320.PersonDAO.class.getName());

    public static void updatePerson(Person person) {
        //Person person = new Person();
        log.log(Level.FINE, "Update People");
        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = DBHelper.getConnection();

            String sql = "Insert INTO cis320.person (id, first, last, email, phone, birthday) VALUES (?, ?, ?, ?, ?, ?)";
            // If you had parameters, it would look something like
            // String sql = "select id, first, last, phone from person where id = ?";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);

            // If you had parameters, they would be set wit something like:
            stmt.setInt(1, person.getId());
            stmt.setString(2, person.getFirst());
            stmt.setString(3, person.getLast());
            stmt.setString(4, person.getEmail());
            stmt.setString(5, person.getPhone());
            stmt.setString(6, person.getBirthday());
            stmt.executeUpdate();

        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se);
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e);
        } finally {
            // Ok, close our result set, statement, and connection
            try {
                stmt.close();
            } catch (Exception e) {
                log.log(Level.SEVERE, "Error", e);
            }
            try {
                conn.close();
            } catch (Exception e) {
                log.log(Level.SEVERE, "Error", e);
            }
        }
    }

    public static List<Person> getPeople() {
        //Person person = new Person();
        log.log(Level.FINE, "Get People");
        List<Person> list = new LinkedList<Person>();


        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        try {
            conn = DBHelper.getConnection();

            String sql = "select id, first, last, email, phone, birthday from person";

            // If you had parameters, it would look something like
            // String sql = "select id, first, last, phone from person where id = ?";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);

            //stmt.setString(1,"1");
            rs = stmt.executeQuery();

            while (rs.next()) {
                Person person = new Person();
                person.setId(rs.getInt("id"));
                person.setFirst(rs.getString("first"));
                person.setLast(rs.getString("last"));
                person.setEmail(rs.getString("email"));
                person.setPhone(rs.getString("phone"));
                person.setBirthday(rs.getString("birthday"));
                list.add(person);
            }

        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se);
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e);
        } finally {
            // Ok, close our result set, statement, and connection
            try {
                rs.close();
            } catch (Exception e) {
                log.log(Level.SEVERE, "Error", e);
            }
            try {
                stmt.close();
            } catch (Exception e) {
                log.log(Level.SEVERE, "Error", e);
            }
            try {
                conn.close();
            } catch (Exception e) {
                log.log(Level.SEVERE, "Error", e);
            }
        }
        return list;
    }

    public static void deletePerson(int id) {
        log.log(Level.FINE, "Delete People");
        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = DBHelper.getConnection();

            String sql = "DELETE from person where id = ?";

            stmt = conn.prepareStatement(sql);

            stmt.setInt(1,id);
            stmt.executeUpdate();

        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se);
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e);
        } finally {
            try {
                stmt.close();
            } catch (Exception e) {
                log.log(Level.SEVERE, "Error", e);
            }
            try {
                conn.close();
            } catch (Exception e) {
                log.log(Level.SEVERE, "Error", e);
            }
        }
    }

    public static void editPerson(Person person) {
        //Person person = new Person();
        log.log(Level.FINE, "Edit People");
        Connection conn = null;
        PreparedStatement stmt = null;

        try {
            conn = DBHelper.getConnection();

            String sql = "update person set first=?, last=?, email=?, phone=?, birthday=? where id=?";

            // If you had parameters, it would look something like
            // String sql = "select id, first, last, phone from person where id = ?";

            // Create an object with all the info about our SQL statement to run.
            stmt = conn.prepareStatement(sql);

            // If you had parameters, they would be set wit something like:
            stmt.setString(1, person.getFirst());
            stmt.setString(2, person.getLast());
            stmt.setString(3, person.getEmail());
            stmt.setString(4, person.getPhone());
            stmt.setString(5, person.getBirthday());
            stmt.setInt(6, person.getId());
            stmt.executeUpdate();

        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se);
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e);
        } finally {
            // Ok, close our result set, statement, and connection
            try {
                stmt.close();
            } catch (Exception e) {
                log.log(Level.SEVERE, "Error", e);
            }
            try {
                conn.close();
            } catch (Exception e) {
                log.log(Level.SEVERE, "Error", e);
            }
        }
    }
}
