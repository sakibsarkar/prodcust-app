import ProdCustCard from "@/cards/ProdCustCard";

const ProdCustDisplay = ({ titlte = "", data = [] }) => {
    return (
        <div className="flex flex-col justify-center items-start gap-[25px] w-full">
            <button className="myBtn">{titlte}</button>
            <div className="prodGrid">
                {
                    data?.map(prod => <ProdCustCard key={prod.id} data={prod} />)
                }
            </div>
        </div>
    );
};

export default ProdCustDisplay;