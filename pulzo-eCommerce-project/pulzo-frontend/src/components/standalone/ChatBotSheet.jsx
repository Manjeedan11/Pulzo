import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CircuitBoard, Sparkles, Bot, User, ArrowRight } from "lucide-react";
import { RainbowButton } from "../magicui/rainbow-button";

export function ChatBotSheet() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: `[INST] ${input} [/INST]`,
            parameters: { max_new_tokens: 1000, return_full_text: false },
          }),
        }
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      const botResponse =
        data[0]?.generated_text?.trim() ||
        "I couldn't process that request. Could you please rephrase?";

      setMessages((prev) => [
        ...prev,
        { type: "bot", content: botResponse, timestamp: new Date() },
      ]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "I'm having trouble connecting. Please try again later.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <RainbowButton
        className="fixed bottom-4 right-4 h-12 px-4 w-fit rounded-[30px] flex items-center gap-2"
        onClick={() => setIsChatBotOpen(true)}
      >
        <Sparkles className="w-4 h-4 text-white fill-white" />
        <span className="font-poppins text-white">Chat with AI</span>
      </RainbowButton>

      <Sheet open={isChatBotOpen} onOpenChange={setIsChatBotOpen}>
        <SheetContent className="w-[400px] sm:w-[540px] h-full">
          <SheetHeader className="pb-4">
            <div className="flex items-center gap-2">
              <CircuitBoard className="h-6 w-6 text-blue-500" />
              <SheetTitle>GearBot Assistant</SheetTitle>
              <Badge variant="secondary" className="ml-2">
                <Sparkles className="h-3 w-3 mr-1" /> AI Powered
              </Badge>
            </div>
            <SheetDescription>Your personal tech assistant</SheetDescription>
          </SheetHeader>

          <div className="flex flex-col h-[600px]">
            <ScrollArea className="flex-1 pr-4">
              <div className="flex flex-col gap-4 pb-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      message.type === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Avatar
                      className={`${
                        message.type === "bot"
                          ? "bg-blue-100 text-blue-500"
                          : "bg-gray-100 text-gray-500"
                      } flex justify-center items-center h-8 w-8`}
                    >
                      {message.type === "bot" ? (
                        <Bot className="h-4 w-4" />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </Avatar>
                    <div
                      className={`rounded-lg p-4 max-w-[80%] ${
                        message.type === "bot"
                          ? "bg-blue-50 text-blue-900"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <span className="text-xs text-gray-500 mt-2 block">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <Avatar className="bg-blue-100 text-blue-500 h-8 w-8">
                      <Bot className="h-4 w-4" />
                    </Avatar>
                    <div className="rounded-lg p-4 bg-blue-50 text-blue-900 max-w-[80%]">
                      <div className="flex items-center gap-2 text-sm animate-pulse">
                        Thinking...
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="flex gap-2 mt-4 pb-4">
              <Input
                placeholder="Ask about tech products or support..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                className="bg-blue-500 hover:bg-blue-600"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="animate-spin">↻</div>
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
