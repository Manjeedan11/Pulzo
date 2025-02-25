import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  CircuitBoard,
  Send,
  Bot,
  User,
  Sparkles,
  MessageCircle,
  BotMessageSquare,
} from "lucide-react";
import { ShinyButton } from "../magicui/shiny-button";

function ChatBotSheet({ open, onOpenChange }) {
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "👋 Hi there! I'm TechBot, your personal electronics assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", content: input, timestamp: new Date() },
    ]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "Can you specify the type of device you're looking for?",
          timestamp: new Date(),
        },
      ]);
    }, 1000);
  };

  return (
    <div>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className="w-[400px] sm:w-[540px] h-full">
          <SheetHeader className="pb-4">
            <div className="flex items-center gap-2">
              <CircuitBoard className="h-6 w-6 text-blue-500" />
              <SheetTitle>TechBot Assistant</SheetTitle>
              <Badge variant="secondary" className="ml-2">
                <Sparkles className="h-3 w-3 mr-1" /> AI Powered
              </Badge>
            </div>
            <SheetDescription>
              Your personal electronics assistant
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col h-[600px]">
            <ScrollArea className="flex-1 pr-4">
              <div className="flex flex-col gap-4">
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
                      } flex justify-center items-center`}
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
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex gap-2 mt-4 pb-4">
              <Input
                placeholder="Ask about our latest tech products..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                className="bg-blue-500 hover:bg-blue-600"
              >
                <Sparkles className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ChatBotSheet;
