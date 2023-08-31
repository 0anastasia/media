import ChatMessage from './ChatMessage';
import Widget from './Widget';

export default function getPositions(messages, chatContainer, newMessageInput, bodyCont, element) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const mesPosition = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

      const newMessage = new ChatMessage(newMessageInput, mesPosition, element);
      messages.push(newMessage);

      newMessage.createNewMes(chatContainer, messages, element);

      newMessageInput.closest('.chat-form').reset();
    }, (error) => {
      console.log(error);
      const widget = new Widget();
      widget.createFormWidget(bodyCont, newMessageInput, chatContainer, messages, element);
    });
  }
}
