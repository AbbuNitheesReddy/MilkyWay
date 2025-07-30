"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send, X, Bot, User, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { handleChat } from "@/app/(main)/chat/actions";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

type Message = {
  text: string;
  sender: "user" | "bot";
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    if (isOpen) {
        setMessages([{
            text: "Hello! I'm the MilkyWay assistant. I can help you check your order status. Just ask!",
            sender: "bot"
        }]);
    }
  }, [isOpen]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "" || isLoading) return;

    const userMessage: Message = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    const result = await handleChat(inputValue);

    setIsLoading(false);

    if (result.success && result.result) {
      const botMessage: Message = { text: result.result.message, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } else {
        const errorMessage: Message = { text: result.message, sender: "bot"};
        setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={toggleChat} className="rounded-full w-16 h-16 shadow-lg hover:-translate-y-1">
          {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
          <span className="sr-only">{isOpen ? "Close chat" : "Open chat"}</span>
        </Button>
      </div>

      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-full max-w-sm transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <Card className="shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarFallback>
                        <Bot />
                    </AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-xl">MilkyWay Assistant</CardTitle>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
                <X className="h-5 w-5"/>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-80 overflow-y-auto pr-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={cn("flex items-start gap-3", msg.sender === "user" ? "justify-end" : "justify-start")}>
                  {msg.sender === "bot" && (
                     <Avatar className="w-8 h-8">
                        <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "rounded-lg px-4 py-2 max-w-[80%]",
                      msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                   {msg.sender === "user" && (
                     <Avatar className="w-8 h-8">
                        <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
               {isLoading && (
                <div className="flex items-start gap-3 justify-start">
                    <Avatar className="w-8 h-8">
                        <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-4 py-2 bg-muted">
                        <Loader2 className="h-5 w-5 animate-spin text-primary"/>
                    </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="mt-4 flex items-center gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about your order..."
                autoComplete="off"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
