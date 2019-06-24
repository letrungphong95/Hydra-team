from django.shortcuts import render
from django.http import HttpResponse 
import json
from django.views.decorators.csrf import csrf_exempt
from googletrans import Translator
translator = Translator()

def index(request):
    return render(request, 'chat/chat.html')

def send_text(request):
    if request.method == 'POST':
        user_text = request.POST['text']
        bot_text = translator.translate(user_text, dest = 'vi')
        response_data = {
            'user_text': user_text,
            'bot_text': bot_text.text
        }
        return HttpResponse(
            json.dumps(response_data),
            content_type="application/json"
        )

