# Form Implementation Examples

## Registration Form

```tsx
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (data.password !== data.confirmPassword) {
        toast.error("รหัสผ่านไม่ตรงกัน");
        return;
      }
      
      toast.success("ลงทะเบียนสำเร็จ!");
      form.reset();
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">สร้างบัญชีใหม่</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ชื่อ</FormLabel>
                <FormControl>
                  <Input placeholder="กรอกชื่อ" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>นามสกุล</FormLabel>
                <FormControl>
                  <Input placeholder="กรอกนามสกุล" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>อีเมล</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="example@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>เบอร์โทรศัพท์</FormLabel>
                <FormControl>
                  <Input placeholder="0812345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>รหัสผ่าน</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="กรอกรหัสผ่าน" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ยืนยันรหัสผ่าน</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="ยืนยันรหัสผ่าน" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "กำลังประมวลผล..." : "ลงทะเบียน"}
          </Button>
        </form>
      </Form>
    </Card>
  );
}
```

## Benefit Application Form

```tsx
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export default function BenefitApplicationForm() {
  const form = useForm({
    defaultValues: {
      benefitType: "",
      fullName: "",
      idCard: "",
      birthDate: "",
      disabilityType: "",
      income: "",
      documents: [],
    },
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API submission
      console.log("Submitting:", data);
      toast.success("ยื่นคำขอสำเร็จ! เราจะติดต่อคุณในเร็วๆ นี้");
      form.reset();
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่");
    }
  };

  return (
    <Card className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">ยื่นคำขอสิทธิประโยชน์</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Benefit Type */}
          <FormField
            control={form.control}
            name="benefitType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ประเภทสิทธิประโยชน์</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกประเภทสิทธิประโยชน์" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="disability">สิทธิประโยชน์ผู้พิการ</SelectItem>
                    <SelectItem value="tax">สิทธิลดหย่อนภาษี</SelectItem>
                    <SelectItem value="land">ที่ดินราชพัสดุ</SelectItem>
                    <SelectItem value="innovation">นวัตกรรมเกษตร</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ชื่อ-นามสกุล</FormLabel>
                <FormControl>
                  <Input placeholder="กรอกชื่อ-นามสกุล" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* ID Card */}
          <FormField
            control={form.control}
            name="idCard"
            render={({ field }) => (
              <FormItem>
                <FormLabel>เลขประจำตัวประชาชน</FormLabel>
                <FormControl>
                  <Input placeholder="X-XXXX-XXXXX-XX-X" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Birth Date */}
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>วันเดือนปีเกิด</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Disability Type */}
          <FormField
            control={form.control}
            name="disabilityType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ประเภทความพิการ</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกประเภทความพิการ" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="blind">ตาบอด</SelectItem>
                    <SelectItem value="deaf">หูหนวก</SelectItem>
                    <SelectItem value="mobility">ปัญหาการเคลื่อนไหว</SelectItem>
                    <SelectItem value="learning">ปัญหาการเรียนรู้</SelectItem>
                    <SelectItem value="autism">ออทิสติก</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Income */}
          <FormField
            control={form.control}
            name="income"
            render={({ field }) => (
              <FormItem>
                <FormLabel>รายได้ต่อเดือน (บาท)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Documents Checklist */}
          <FormItem>
            <FormLabel>เอกสารที่ส่งมา</FormLabel>
            <div className="space-y-3 mt-3">
              {["บัตรประชาชน", "ใบรับรองแพทย์", "ใบสำคัญการศึกษา"].map((doc) => (
                <div key={doc} className="flex items-center space-x-2">
                  <Checkbox id={doc} />
                  <label htmlFor={doc} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {doc}
                  </label>
                </div>
              ))}
            </div>
          </FormItem>

          <Button type="submit" className="w-full">
            ยื่นคำขอ
          </Button>
        </form>
      </Form>
    </Card>
  );
}
```

## Contact Form

```tsx
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      console.log("Contact:", data);
      toast.success("ส่งข้อความสำเร็จ! เราจะติดต่อคุณในเร็วๆ นี้");
      form.reset();
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่");
    }
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">ติดต่อเรา</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ชื่อ</FormLabel>
                <FormControl>
                  <Input placeholder="กรอกชื่อ" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>อีเมล</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="example@email.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>เบอร์โทรศัพท์</FormLabel>
                <FormControl>
                  <Input placeholder="0812345678" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>หัวข้อ</FormLabel>
                <FormControl>
                  <Input placeholder="กรอกหัวข้อ" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ข้อความ</FormLabel>
                <FormControl>
                  <Textarea placeholder="กรอกข้อความ" rows={5} {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            ส่งข้อความ
          </Button>
        </form>
      </Form>
    </Card>
  );
}
```

## Login Form

```tsx
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { toast } from "sonner";

export default function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Simulate login
      if (data.email && data.password) {
        toast.success("เข้าสู่ระบบสำเร็จ!");
        // Redirect to dashboard
      }
    } catch (error) {
      toast.error("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">เข้าสู่ระบบ</h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>อีเมล</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="example@email.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>รหัสผ่าน</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="กรอกรหัสผ่าน" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            เข้าสู่ระบบ
          </Button>
        </form>
      </Form>

      <div className="mt-4 text-center">
        <p className="text-gray-600">
          ยังไม่มีบัญชี?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            สร้างบัญชีใหม่
          </Link>
        </p>
      </div>
    </Card>
  );
}
```
