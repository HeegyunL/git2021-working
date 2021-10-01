package com.git.controller.Contact;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.SortedMap;
import java.util.TreeMap;
import java.util.concurrent.atomic.AtomicLong;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.git.controller.lib.TextProcesser;

@RestController
public class ContactController {
	public SortedMap<Long, Contact> contacts = 
			Collections.synchronizedSortedMap(new TreeMap<Long,Contact>(Collections.reverseOrder()));
	public AtomicLong maxId = new AtomicLong();
	
	@GetMapping(value = "/contacts")
	public List<Contact>getContacts() throws InterruptedException{
		Thread.sleep(1000);
		return new ArrayList<Contact>(contacts.values());
	}
	
	@PostMapping(value = "/contacts")
	public Contact addContact(@RequestBody Contact contact, HttpServletResponse res)
			throws InterruptedException{
		Thread.sleep(2000);
	
		
		if(TextProcesser.isEmpyText(contact.getName())) {
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		}
		if(TextProcesser.isEmpyText(contact.getPhone())) {
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		}
		if(TextProcesser.isEmpyText(contact.getMail())) {
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		}
	
		Long currentId = maxId.incrementAndGet();
		Contact contactItem = Contact.builder()
							.id(currentId)
							.name(contact.getName())
							.phone(contact.getPhone()) 
							.mail(contact.getMail())
							.memo(contact.getMemo())
							.createdTime(new Date().getTime())
							.build();
		contacts.put(currentId, contactItem);
		
		res.setStatus(HttpServletResponse.SC_CREATED);
		return contactItem;
	}
	
//	ªË¡¶
	@DeleteMapping(value="/contacts/{id}")
	public boolean removeContacts(@PathVariable long id, HttpServletResponse res) {
		Contact contact = contacts.get(Long.valueOf(id));
		if(contact == null) {
			res.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return false;
		}
			
		contacts.remove(Long.valueOf(id));
		
		return true;
		
	}
	@PutMapping(value="/contacts/{id}")
	public Contact modifyContacts(@PathVariable  long id, @RequestBody Contact contact, HttpServletResponse res) {
		Contact contactItem = contacts.get(Long.valueOf(id));
		if(contactItem == null) {
			res.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return null;
		}
		if(TextProcesser.isEmpyText(contact.getName())) {
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		}
		if(TextProcesser.isEmpyText(contact.getPhone())) {
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		}
		if(TextProcesser.isEmpyText(contact.getMail())) {
			res.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			return null;
		}
		
		contactItem.setName(contact.getName());
		contactItem.setPhone(contact.getPhone());
		contactItem.setMail(contact.getMail());
		contactItem.setMemo(contact.getMemo());
		
		return contactItem;
	}
	
	

}
