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
  ArrowRight,
} from "lucide-react";
import { ShinyButton } from "../magicui/shiny-button";
import { RainbowButton } from "../magicui/rainbow-button";

function ChatBotSheet() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "👋 Hi there ! Our GearBot is currently under development. In the meantime, please feel free to reach out to our 24/7 Customer Care for assistance !",
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
    <div className="">
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
            <SheetDescription>Your personal chat assistant</SheetDescription>
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
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ChatBotSheet;
