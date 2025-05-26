
const TrustedCompanies = () => {
  const companies = [
    "Restaurante",
    "Rede de Farmácias", 
    "Escola",
    "Mercado",
    "Clínica"
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-600 font-semibold mb-8">
          Empresas que confiam na Treinow:
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {companies.map((company, index) => (
            <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="text-gray-700 font-medium">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
