import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

export const ProjectCard = ({ title, description, image, category }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge>{category}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-end">
          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
            View Details
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};