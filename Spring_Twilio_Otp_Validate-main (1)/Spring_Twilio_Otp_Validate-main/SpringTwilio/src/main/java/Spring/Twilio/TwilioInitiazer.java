package Spring.Twilio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import com.twilio.Twilio;

@Configuration
public class TwilioInitiazer {

	
	private final Twilioproperties twilioproperties;
	
	@Autowired
	public TwilioInitiazer(Twilioproperties twilioproperties)
	{
		this.twilioproperties=twilioproperties;
		Twilio.init(twilioproperties.getAccountSid(), twilioproperties.getAuthToken());
		System.out.println("Twilio initialized with account-"+twilioproperties.getAccountSid());
	}
}
