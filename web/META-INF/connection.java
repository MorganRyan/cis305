import java.sql.Connection;
import javax.sql.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;

Context initContext = new InitialContext();

Context envContext = (Context) initContext.lookup("java:/comp/env");

DataSource ds = (DataSource) envContext.lookup("jdbc/cis320");

Connection conn = ds.getConnection();