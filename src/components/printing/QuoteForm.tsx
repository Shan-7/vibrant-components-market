import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

export const QuoteForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote request submitted",
      description: "We'll get back to you within 24 hours with a quote.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input type="file" accept=".stl,.obj,.3mf" required />
        <p className="text-sm text-muted mt-1">Supported formats: STL, OBJ, 3MF</p>
      </div>
      <div>
        <Input type="email" placeholder="Your email" required />
      </div>
      <div>
        <Input type="text" placeholder="Project description" required />
      </div>
      <Button type="submit">Get Quote</Button>
    </form>
  );
};