
const TrustedCompanies = () => {
  const stats = [
    { number: "500+", label: "Empresas" },
    { number: "50K+", label: "Colaboradores" },
    { number: "95%", label: "Aprovação" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-8">
            Confiado por empresas de todos os tamanhos
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
