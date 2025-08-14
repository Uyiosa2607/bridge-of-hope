"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Heart,
  Mail,
  Phone,
  Copy,
  Check,
  Users,
  Home,
  GraduationCap,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function BridgesOfHope() {
  const [showCryptoOptions, setShowCryptoOptions] = useState(false);
  const [progress, setProgress] = useState(58);
  const [copiedAddress, setCopiedAddress] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const cryptoOptions = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      address: "LbkRHBCZqSV3Wig1zLuZBedoe7hjQCc4yi",
      gradient: "from-orange-400 to-orange-600",
      icon: "₿",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      address: "0x261B1F579C3973D94f36976C74A9BB5571aDf73A",
      gradient: "from-blue-400 to-blue-600",
      icon: "Ξ",
    },
    {
      name: "Binance Coin",
      symbol: "BNB",
      address: "0x261B1F579C3973D94f36976C74A9BB5571aDf73A",
      gradient: "from-yellow-400 to-yellow-600",
      icon: "B",
    },
    {
      name: "Ripple",
      symbol: "XRP",
      address: "rDABaR9s91ye1woPPpoAhWvt5TtC4uUALM",
      gradient: "from-indigo-400 to-indigo-600",
      icon: "◊",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 89) {
            clearInterval(interval);
            return 89;
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = async (address: string, symbol: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(symbol);
      setTimeout(() => setCopiedAddress(""), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="fixed w-full z-[50] bg-[#fafafa] backdrop-blur-lg shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8 py-3 lg:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-y-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <Image
                  src="/logo.png"
                  width={30}
                  height={30}
                  quality={100}
                  alt="logo"
                />
              </div>
              <div>
                <h1 className="text-sm lg:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Bridges of Hope
                </h1>
                <p className="text-xs text-gray-600 font-medium">
                  by Shlby Inc • Seoul
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-right">
              {/* <Image
                src="/logo.png"
                width={40}
                height={40}
                quality={100}
                alt="logo"
              /> */}
              <div className="hidden lg:block">
                <p className="text-sm font-semibold text-gray-800">
                  Seoul, South Korea
                </p>
                <p className="text-xs text-gray-600">
                  Real Estate & Humanitarian Aid
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className={`relative py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mt-10 mx-auto text-center">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="mb-2 lg:mb-8">
              <h1 className="text-4xl mt-4 lg:mt-0 lg:text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2 lg:mb-6 leading-tight">
                Bridges of Hope
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
                Supporting North Korean Defectors
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-4xl mx-auto">
                Building pathways to freedom and new beginnings. Together, we
                provide essential support, resources, and hope to those who have
                courageously chosen a new life.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
              <Image
                src="/team.jpg"
                alt=""
                width={800}
                height={500}
                className="relative rounded-3xl shadow-2xl border-4 border-white/50 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: Users,
                number: "500+",
                label: "Families Supported",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Home,
                number: "85%",
                label: "Success Rate",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Star,
                number: "3 Years",
                label: "Avg Support",
                color: "from-purple-500 to-pink-500",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-white/70 backdrop-blur-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About the Initiative */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0 overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            <CardHeader className="relative text-center pb-8 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full">
                    <Shield className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                About the Initiative
              </CardTitle>
              <CardDescription className="text-xl text-gray-700 font-medium">
                A humanitarian mission by Shlby Inc Real Estate
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8 p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    <strong className="text-blue-600">Bridges of Hope</strong>{" "}
                    is Shlby Inc's dedicated humanitarian initiative to support
                    North Korean defectors in their journey toward integration
                    and independence in South Korea.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    As a Seoul-based real estate company, we understand the
                    critical importance of having a safe place to call home. Our
                    mission extends beyond providing shelter to offer
                    comprehensive support.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/group.jpg"
                    alt="Community support illustration"
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {[
                  {
                    icon: Home,
                    title: "Housing",
                    desc: "Safe shelter & accommodation",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: Users,
                    title: "Job Placement",
                    desc: "Career opportunities & training",
                    color: "from-green-500 to-green-600",
                  },
                  {
                    icon: GraduationCap,
                    title: "Education",
                    desc: "Learning resources & support",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: Heart,
                    title: "Counseling",
                    desc: "Psychological & emotional care",
                    color: "from-pink-500 to-pink-600",
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">{service.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donation Progress */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5"></div>
            <CardHeader className="relative text-center bg-gradient-to-r from-green-50/50 to-blue-50/50">
              <CardTitle className="text-3xlfont-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-1">
                Donation Progress
              </CardTitle>
              <CardDescription className="sm:text-base lg:text-lg text-gray-700">
                Help us reach our goal to support more families
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8 p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold text-gray-700">
                  <span>Current Progress</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {progress}%
                  </span>
                </div>
                <div className="relative">
                  <Progress value={progress} className="h-6 bg-gray-200" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="sm:text-2xl lg:text-3xl font-bold text-green-600 mb-2">
                      ₩{(progress * 1.2).toFixed(1)}M
                    </div>
                    <div className="text-green-700 font-medium">
                      Raised So Far
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="sm:text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
                      ₩106.8M
                    </div>
                    <div className="text-blue-700 font-medium">Target Goal</div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
                <p className="text-gray-700 font-medium">
                  <span className="text-green-600 font-bold">
                    {Math.round((89 - progress) * 1.2)}M KRW
                  </span>{" "}
                  more needed to reach our goal
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donate Now Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5"></div>
            <CardHeader className="relative text-center bg-gradient-to-r from-purple-50/50 to-pink-50/50">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Donate Now
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Support our mission with secure cryptocurrency donations
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8 p-8">
              <div className="text-center">
                <Button
                  onClick={() => setShowCryptoOptions(!showCryptoOptions)}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 text-white px-12 py-4 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg font-semibold"
                >
                  {showCryptoOptions
                    ? "Hide Crypto Options"
                    : "Show Crypto Options"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {showCryptoOptions && (
                <div className="space-y-6 animate-in slide-in-from-top-4 duration-500">
                  <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                    Choose Your Cryptocurrency
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {cryptoOptions.map((crypto, index) => (
                      <Card
                        key={crypto.symbol}
                        className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${crypto.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                        ></div>
                        <CardContent className="relative p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-14 h-14 rounded-full bg-gradient-to-br ${crypto.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                              >
                                {crypto.icon}
                              </div>
                              <div>
                                <div className="font-bold text-gray-900 text-lg">
                                  {crypto.name}
                                </div>
                                <div className="text-gray-600 font-medium">
                                  {crypto.symbol}
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                copyToClipboard(crypto.address, crypto.symbol)
                              }
                              className={`flex items-center space-x-2 border-2 hover:bg-gradient-to-r ${
                                crypto.gradient
                              } hover:text-white hover:border-transparent transition-all duration-300 ${
                                copiedAddress === crypto.symbol
                                  ? `bg-gradient-to-r ${crypto.gradient} text-white border-transparent`
                                  : ""
                              }`}
                            >
                              {copiedAddress === crypto.symbol ? (
                                <>
                                  <Check className="h-4 w-4" />
                                  <span>Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-4 w-4" />
                                  <span>Copy</span>
                                </>
                              )}
                            </Button>
                          </div>
                          <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200">
                            <div className="text-xs font-mono text-gray-700 break-all leading-relaxed">
                              {crypto.address}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                    <p className="text-gray-700 font-medium">
                      🔒 All donations are secure and go directly to supporting
                      North Korean defectors
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-lg shadow-2xl border-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
            <CardHeader className="relative text-center bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Get in Touch
              </CardTitle>
              <CardDescription className="text-lg text-gray-700">
                Have questions or want to learn more about our initiative?
              </CardDescription>
            </CardHeader>
            <CardContent className="relative p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 text-lg"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how you'd like to help or any questions you have..."
                    rows={5}
                    className="rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-lg"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 text-lg font-semibold"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                  <Heart className="relative h-8 w-8 text-red-500 fill-current" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Bridges of Hope
                  </h3>
                  <p className="text-gray-400 font-medium">by Shlby Inc</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Supporting North Korean defectors in their journey toward
                freedom, integration, and hope for a brighter future through
                comprehensive humanitarian aid.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <a
                    href="mailto:shlbyincrealestate@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                  >
                    shlbyincrealestate@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <a
                    href="tel:+821012345678"
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                  >
                    +82 10-1234-5678
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-6">Our Mission</h4>
              <p className="text-gray-300 leading-relaxed">
                Every donation, no matter the size, helps build bridges to
                freedom and creates opportunities for those seeking a new
                beginning. Together, we can make a difference.
              </p>
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Shlby Inc. All rights reserved. |
              Seoul, South Korea | Building Bridges to Hope
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
