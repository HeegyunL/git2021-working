package com.git.helloclient;

<<<<<<< HEAD
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@Service
public class HelloClientService {

	private Map<String, SseEmitter> emitters = new ConcurrentHashMap<String, SseEmitter>();

	public void putEmitter(String clientId, SseEmitter emitter) {
		this.emitters.put(clientId, emitter);
		System.out.println(emitters.size());
	}

	public SseEmitter getEmitter(String clientId) {
		return this.emitters.get(clientId);
	}

	public void removeEmitter(String clientId) {
		this.emitters.remove(clientId);
	}

	// 1번 -- 수신쪽은 본인 번호
	@RabbitListener(queues = "test.hello.3")
	public void receiveMessage(String message) throws UnsupportedEncodingException {

		System.out.println("-- test.hellp.3 --");
		System.out.println(message);

		emitters.values().parallelStream().forEach(emitter -> {
			try {
				emitter.send(message);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		});

	}
}
=======
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class HelloClientService {
	
	@RabbitListener(queues="test.hello.3")
	public void receiveMessage(String message) {
		System.out.println("--test.hellp.3--");
		System.out.println(message);
	}
}
>>>>>>> 964e2b4f224d5cfb112bc7a3f1938e85031788fa
