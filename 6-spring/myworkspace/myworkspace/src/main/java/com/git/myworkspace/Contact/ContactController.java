package com.git.myworkspace.Contact;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.git.myworkspace.lib.TextProcesser;

@RestController
public class ContactController {
	private ContactRepository repo;
	
	@Autowired
	public ContactController(ContactRepository repo) {
		this.repo = repo;
	}
	
	@GetMapping(value = "/contacts")
	public List<Contact> getContacts() throws InterruptedException{

		return repo.findAll(Sort.by("id").descending());
	}
	@GetMapping("/contacts/paging")
	public Page<Contact> getContactPaging(@RequestParam int page, @RequestParam int size){
		return repo.findAll(PageRequest.of(page, size,Sort.by("id").descending()));
	}
	
	@PostMapping(value = "/contacts")
	public Contact addContact(@RequestBody Contact contact, HttpServletResponse res)
			throws InterruptedException{
	
		
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
	
		Contact contactItem = Contact.builder()
							.name(contact.getName())
							.phone(contact.getPhone()) 
							.mail(contact.getMail())
							.memo(contact.getMemo())
							.createdTime(new Date().getTime())
							.build();
		Contact ContactSaved = repo.save(contactItem);
		
		res.setStatus(HttpServletResponse.SC_CREATED);
		return ContactSaved;
	}
	
//	ªË¡¶
	@DeleteMapping(value="/contacts/{id}")
	public boolean removeContact(@PathVariable long id, HttpServletResponse res) {
		Optional<Contact> contact = repo.findById(id);
		if(contact.isEmpty()) {
			res.setStatus(HttpServletResponse.SC_NOT_FOUND);
			return false;
		}
			
		repo.deleteById(id);
		
		return true;
		
	}
	@PutMapping(value="/contacts/{id}")
	public Contact modifyContact(@PathVariable  long id, @RequestBody Contact contact, 
			HttpServletResponse res) {
		Optional<Contact> contactItem = repo.findById(id);
		if(contactItem.isEmpty()) {
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
		Contact contactToSave = contactItem.get();
		
		contactToSave.setName(contact.getName());
		contactToSave.setPhone(contact.getPhone());
		contactToSave.setMail(contact.getMail());
		contactToSave.setMemo(contact.getMemo());
		
		Contact contactSaved = repo.save(contactToSave);
		
		return contactSaved;
	}
	
	

}
