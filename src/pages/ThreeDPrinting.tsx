import { useState } from "react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Upload } from "lucide-react";

const ThreeDPrinting = () => {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith('.stl')) {
        setFile(selectedFile);
        toast({
          title: "File selected",
          description: `${selectedFile.name} has been selected for upload.`,
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please select an STL file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    // TODO: Implement file upload logic
    toast({
      title: "Upload started",
      description: "Your STL file is being processed...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-primary mb-6">3D Printing Services</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Upload Your STL File</h2>
            <div className="border-2 border-dashed border-primary/50 rounded-lg p-8 text-center">
              <Input
                type="file"
                accept=".stl"
                onChange={handleFileChange}
                className="hidden"
                id="stl-upload"
              />
              <label
                htmlFor="stl-upload"
                className="cursor-pointer flex flex-col items-center gap-4"
              >
                <Upload className="w-12 h-12 text-primary" />
                <span className="text-lg">Click to upload or drag and drop</span>
                <span className="text-sm text-muted">STL files only</span>
              </label>
              {file && (
                <div className="mt-4">
                  <p className="text-sm">Selected file: {file.name}</p>
                  <Button onClick={handleUpload} className="mt-2">
                    Upload File
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our 3D Printing Service</h2>
            <div className="space-y-4">
              <p>We offer high-quality 3D printing services for your projects:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Professional grade printers</li>
                <li>Multiple material options</li>
                <li>Fast turnaround times</li>
                <li>Custom specifications support</li>
              </ul>
              <p className="mt-4">
                Contact us for custom requirements or bulk orders at:
                <br />
                Email: brickelectronics1@gmail.com
                <br />
                Phone: +91 9370566844
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThreeDPrinting;