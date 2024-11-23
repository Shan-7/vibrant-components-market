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
      <Card className="bg-gradient-to-br from-white/5 to-white/10 border-white/10 p-6 hover:from-white/10 hover:to-white/15 transition-colors cursor-pointer group animate-fade-in">
        <img src={icon} alt={name} className="w-12 h-12 mb-4" />
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted mt-1">{count} products</p>
      </Card>
    </Link>
  );
};

export default CategoryCard;