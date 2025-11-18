export default function AboutPage() {

    return (
        <>


            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Learn more about us</h1>
                    <p className="col-md-8 fs-4">
                        Using a series of utilities, you can create this jumbotron, just
                        like the one in previous versions of Bootstrap. Check out the
                        examples below for how you can remix and restyle it to your liking.
                    </p>
                    <button
                        className="btn btn-primary btn-lg"
                        type="button"
                        onClick={() => window.location.href = '/products'}
                    >
                        Explore Our Products
                    </button>
                </div>
            </div>

            <div className="container">
                <p>La "Compagnia dei Prodotti Immaginari" (CPI) affonda le sue radici in un'idea visionaria del **1985**. Il fondatore, l'enigmatico Dott. Alistair R. Fictional, concepì l'audace progetto di colmare il divario tra il desiderio e la sua manifestazione, stringendo accordi commerciali esclusivi con i più rinomati ma inafferrabili "Fornitori del Sogno" (come il Consorzio di Mythos o l'Atelier di Etereo). Il vero punto di svolta avvenne nel **1998**, con il lancio della rivoluzionaria linea "Luxury Phantasm", che ridefinì il concetto di lusso intangibile e proiettò la CPI su una scala globale. Nel **2010**, l'azienda introdusse il suo pionieristico programma di "Sourcing Etico Immaginario", garantendo che ogni prodotto, sebbene inesistente, rispettasse i più alti standard di sostenibilità e fantasia. L'ultimo grande traguardo risale al **2022**, con l'inaugurazione della piattaforma di e-commerce "Omni-Sogni", che ha reso l'esperienza di acquisto "seamless" (senza soluzione di continuità) un punto fermo, permettendo a chiunque, ovunque, di accedere alla nostra collezione, da quella budget-friendly a quella più sontuosa. Oggi, la CPI continua a essere il leader incontrastato nel commercio dell'inesistente, mantenendo la promessa di offrire qualità top-notch e prezzi imbattibili. </p>
                <p>Our products are sourced from the finest imaginary suppliers, ensuring top-notch quality and unbeatable prices. Whether you're looking for something luxurious or budget-friendly, we have something for everyone. Explore our collection and enjoy a seamless shopping experience!</p>
            </div>


        </>
    )
}