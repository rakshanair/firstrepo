package com.zensar;







import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;





import com.zensar.bean.Address;
import com.zensar.bean.BankAccount;
import com.zensar.bean.Employee;
import com.zensar.bean.Skill;
import com.zensar.util.JPAUtil;






public class App {





public static void loadTesting() {
// write code here to load employee object

EntityManager em=JPAUtil.createEntityManager("PU");
Employee e=em.find(Employee.class, 1);
System.out.println(e);
JPAUtil.shutDown();






}





public static void insertTesting() {
// write the code here to persist employee object
Address address = new Address();
address.setCityName("mlore");
address.setPincode("5750022");





BankAccount account = new BankAccount();
account.setAccountId("123567900");



Skill skill= new Skill("java",1);



Employee employee = new Employee();
employee.setName("raksha");
employee.setBasicSalary(54000.00);
employee.setAddress(address);
employee.setAccount(account);





EntityManagerFactory emf=Persistence.createEntityManagerFactory("JPAIntro");
EntityManager em=emf.createEntityManager();



em.getTransaction().begin();
em.persist(employee);
em.getTransaction().commit();
em.close();
emf.close();





}





public static void main(String[] args) {



loadTesting();
insertTesting();
}
}