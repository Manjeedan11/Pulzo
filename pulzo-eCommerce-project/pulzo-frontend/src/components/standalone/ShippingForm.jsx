import { Label, Button } from "../ui/label";

function ShippingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    phoneNumber: "",
  });

  return (
    <div>
      <form className="space-y-4">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              required
            />
          </div>
          <div>
            <Label htmlFor="addressLine1">Address Line 1</Label>
            <Input
              id="addressLine1"
              name="addressLine1"
              placeholder="123 Main St"
              value={formData.addressLine1}
              required
            />
          </div>
          <div>
            <Label htmlFor="addressLine2">Address Line 2</Label>
            <Input
              id="addressLine2"
              name="addressLine2"
              placeholder="Apt 48"
              value={formData.addressLine2}
              required
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              placeholder="Colombo"
              value={formData.city}
              required
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber">Last Name</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="(+94)-771234567"
              value={formData.lastName}
              required
            />
          </div>
        </div>
        <Button className="w-full">Proceed to Payment</Button>
      </form>
    </div>
  );
}

export default ShippingForm;
