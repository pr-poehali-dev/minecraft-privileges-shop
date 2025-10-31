import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const privileges = [
    {
      name: "ВИП",
      price: 100,
      color: "text-primary",
      bgColor: "bg-primary/10 hover:bg-primary/20",
      icon: "Star",
      features: [
        "КД ТП на спавн 8 сек",
        "Привилегия в Discord",
        "Префикс VIP",
        "200$ на баланс"
      ]
    },
    {
      name: "ПРЕМИУМ",
      price: 150,
      color: "text-accent",
      bgColor: "bg-accent/10 hover:bg-accent/20",
      icon: "Crown",
      popular: true,
      features: [
        "Всё из ВИП",
        "КД ТП на спавн 5 сек",
        "400$ на баланс",
        "Префикс Premium"
      ]
    },
    {
      name: "ПОВЕЛИТЕЛЬ",
      price: 300,
      color: "text-secondary",
      bgColor: "bg-secondary/10 hover:bg-secondary/20",
      icon: "Sparkles",
      features: [
        "Всё из Премиум",
        "600$ на баланс",
        "Приоритет в очереди",
        "Префикс Повелитель",
        "ТП на спавн 3 сек"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      <header className="border-b border-border/50 backdrop-blur-sm bg-card/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center minecraft-shadow">
                <Icon name="Sword" size={28} className="text-background" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">MedievalLand</h1>
                <p className="text-sm text-muted-foreground">Магазин привилегий</p>
              </div>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-background font-bold minecraft-shadow">
              <Icon name="Wallet" size={20} className="mr-2" />
              Пополнить баланс
            </Button>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Получи преимущество!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Выбери свою привилегию и стань легендой сервера
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {privileges.map((privilege, index) => (
            <Card 
              key={privilege.name}
              className={`relative transition-all duration-300 hover:scale-105 ${privilege.bgColor} border-2 minecraft-shadow animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {privilege.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground font-bold px-4 py-1 minecraft-shadow">
                    ПОПУЛЯРНО
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${privilege.color} bg-card minecraft-shadow`}>
                  <Icon name={privilege.icon} size={36} />
                </div>
                <CardTitle className={`text-3xl font-extrabold ${privilege.color}`}>
                  {privilege.name}
                </CardTitle>
                <CardDescription className="text-4xl font-bold text-foreground mt-2">
                  {privilege.price} ₽
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {privilege.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`mt-1 ${privilege.color}`}>
                      <Icon name="Check" size={20} />
                    </div>
                    <span className="text-foreground/90">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full font-bold text-lg py-6 minecraft-shadow hover:translate-y-[-2px] transition-transform ${
                    privilege.name === "ВИП" ? "bg-primary hover:bg-primary/90 text-background" :
                    privilege.name === "ПРЕМИУМ" ? "bg-accent hover:bg-accent/90 text-background" :
                    "bg-secondary hover:bg-secondary/90 text-foreground"
                  }`}
                >
                  Купить {privilege.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={28} className="text-primary" />
              </div>
              <h3 className="font-bold text-lg">Моментальная активация</h3>
              <p className="text-sm text-muted-foreground">Привилегия активируется сразу после оплаты</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto bg-accent/20 rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg">Безопасная оплата</h3>
              <p className="text-sm text-muted-foreground">Все платежи защищены и проходят через проверенные системы</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 mx-auto bg-secondary/20 rounded-lg flex items-center justify-center">
                <Icon name="Headphones" size={28} className="text-secondary" />
              </div>
              <h3 className="font-bold text-lg">Поддержка 24/7</h3>
              <p className="text-sm text-muted-foreground">Всегда готовы помочь с любыми вопросами</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">© 2024 MedievalLand. Все привилегии выдаются навсегда</p>
          <a 
            href="https://t.me/PandAss1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Icon name="Send" size={18} />
            @PandAss1 — Связь с разработчиком
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;