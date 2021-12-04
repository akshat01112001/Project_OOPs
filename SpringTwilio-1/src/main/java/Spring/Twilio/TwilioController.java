package Spring.Twilio;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class TwilioController {
	@RequestMapping("/")
	public String homepage(ModelAndView model) {
		return "OTP";
	}
	
	@PostMapping("/sendotp")
	public void sendotp(@RequestParam("phone") String phone)
	{
		
	}

}
