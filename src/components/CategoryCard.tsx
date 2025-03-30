
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  icon: string;
  count: number;
}

const CategoryCard = ({ name, icon, count }: CategoryCardProps) => {
  return (
    <Link to={`/category/${name}`}>
      <Card className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer group animate-fade-in">
        <img src={icon} alt={name} className="w-12 h-12 mb-4" />
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{count} products</p>
      </Card>
    </Link>
  );
};

export default CategoryCard;
