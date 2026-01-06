import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Shield,
  AlertTriangle,
  Heart,
  Camera,
  Upload,
  Check,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, title: 'Personal Info', icon: User },
  { id: 2, title: 'Contact Details', icon: Phone },
  { id: 3, title: 'Emergency Contact', icon: Heart },
  { id: 4, title: 'Insurance', icon: Shield },
  { id: 5, title: 'Medical Info', icon: AlertTriangle },
];

const PatientRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    ssn: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyName: '',
    emergencyRelationship: '',
    emergencyPhone: '',
    insuranceProvider: '',
    policyNumber: '',
    groupNumber: '',
    allergies: '',
    bloodType: '',
    medicalNotes: '',
    consent: false,
  });

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: 'Patient Registered Successfully',
      description: `${formData.firstName} ${formData.lastName} has been added to the system.`,
    });
    navigate('/patients');
  };

  const progress = (currentStep / steps.length) * 100;

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Patient Registration</h1>
        <p className="text-muted-foreground">Complete the form to register a new patient</p>
      </div>

      {/* Progress Steps */}
      <Card className="mb-6">
        <CardContent className="py-6">
          <div className="relative">
            <Progress value={progress} className="h-2 mb-6" />
            <div className="flex justify-between">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;

                return (
                  <div key={step.id} className="flex flex-col items-center">
                    <div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300',
                        isActive && 'bg-primary border-primary text-primary-foreground',
                        isCompleted && 'bg-success border-success text-success-foreground',
                        !isActive && !isCompleted && 'bg-muted border-muted-foreground/30 text-muted-foreground'
                      )}
                    >
                      {isCompleted ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <Icon className="h-5 w-5" />
                      )}
                    </div>
                    <span
                      className={cn(
                        'mt-2 text-xs font-medium hidden sm:block',
                        isActive && 'text-primary',
                        isCompleted && 'text-success',
                        !isActive && !isCompleted && 'text-muted-foreground'
                      )}
                    >
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Steps */}
      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep - 1].title}</CardTitle>
          <CardDescription>
            Step {currentStep} of {steps.length}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              {/* Photo Upload */}
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-muted text-3xl text-muted-foreground">
                    {formData.firstName?.[0] || '?'}
                    {formData.lastName?.[0] || '?'}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" className="gap-2">
                    <Camera className="h-4 w-4" />
                    Take Photo
                  </Button>
                  <Button variant="ghost" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Gender *</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => updateFormData('gender', value)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="font-normal">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="font-normal">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="font-normal">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Contact Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="patient@email.com"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="street">Street Address *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="street"
                    placeholder="123 Main Street"
                    value={formData.street}
                    onChange={(e) => updateFormData('street', e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2 col-span-2 md:col-span-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="Boston"
                    value={formData.city}
                    onChange={(e) => updateFormData('city', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Select value={formData.state} onValueChange={(value) => updateFormData('state', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="MA">Massachusetts</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">ZIP Code *</Label>
                  <Input
                    id="zipCode"
                    placeholder="02101"
                    value={formData.zipCode}
                    onChange={(e) => updateFormData('zipCode', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Emergency Contact */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergencyName">Contact Name *</Label>
                  <Input
                    id="emergencyName"
                    placeholder="Full name"
                    value={formData.emergencyName}
                    onChange={(e) => updateFormData('emergencyName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyRelationship">Relationship *</Label>
                  <Select
                    value={formData.emergencyRelationship}
                    onValueChange={(value) => updateFormData('emergencyRelationship', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select relationship" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spouse">Spouse</SelectItem>
                      <SelectItem value="parent">Parent</SelectItem>
                      <SelectItem value="sibling">Sibling</SelectItem>
                      <SelectItem value="child">Child</SelectItem>
                      <SelectItem value="friend">Friend</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="emergencyPhone">Phone Number *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.emergencyPhone}
                      onChange={(e) => updateFormData('emergencyPhone', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Insurance */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="insuranceProvider">Insurance Provider *</Label>
                  <Select
                    value={formData.insuranceProvider}
                    onValueChange={(value) => updateFormData('insuranceProvider', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select insurance provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bcbs">Blue Cross Blue Shield</SelectItem>
                      <SelectItem value="aetna">Aetna</SelectItem>
                      <SelectItem value="united">United Healthcare</SelectItem>
                      <SelectItem value="cigna">Cigna</SelectItem>
                      <SelectItem value="medicare">Medicare</SelectItem>
                      <SelectItem value="medicaid">Medicaid</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="policyNumber">Policy Number *</Label>
                  <Input
                    id="policyNumber"
                    placeholder="Enter policy number"
                    value={formData.policyNumber}
                    onChange={(e) => updateFormData('policyNumber', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="groupNumber">Group Number</Label>
                  <Input
                    id="groupNumber"
                    placeholder="Enter group number (optional)"
                    value={formData.groupNumber}
                    onChange={(e) => updateFormData('groupNumber', e.target.value)}
                  />
                </div>
              </div>

              <div className="p-4 rounded-lg bg-info-light border border-info/20">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-info mt-0.5" />
                  <div>
                    <p className="font-medium text-info">Insurance Card Upload</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Upload front and back of insurance card for verification.
                    </p>
                    <Button variant="outline" size="sm" className="mt-3 gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Card
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Medical Information */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="allergies">Known Allergies</Label>
                  <Textarea
                    id="allergies"
                    placeholder="List any known allergies (medications, food, environmental)..."
                    value={formData.allergies}
                    onChange={(e) => updateFormData('allergies', e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bloodType">Blood Type</Label>
                  <Select
                    value={formData.bloodType}
                    onValueChange={(value) => updateFormData('bloodType', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A+">A+</SelectItem>
                      <SelectItem value="A-">A-</SelectItem>
                      <SelectItem value="B+">B+</SelectItem>
                      <SelectItem value="B-">B-</SelectItem>
                      <SelectItem value="AB+">AB+</SelectItem>
                      <SelectItem value="AB-">AB-</SelectItem>
                      <SelectItem value="O+">O+</SelectItem>
                      <SelectItem value="O-">O-</SelectItem>
                      <SelectItem value="unknown">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="medicalNotes">Additional Medical Notes</Label>
                  <Textarea
                    id="medicalNotes"
                    placeholder="Any other relevant medical history or notes..."
                    value={formData.medicalNotes}
                    onChange={(e) => updateFormData('medicalNotes', e.target.value)}
                    rows={4}
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => updateFormData('consent', !!checked)}
                />
                <div className="space-y-1">
                  <Label htmlFor="consent" className="text-sm font-medium cursor-pointer">
                    I consent to the collection and storage of my personal health information
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    By checking this box, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            {currentStep === steps.length ? (
              <Button onClick={handleSubmit} disabled={!formData.consent} className="gap-2">
                Complete Registration
                <Check className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleNext} className="gap-2">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default PatientRegister;
