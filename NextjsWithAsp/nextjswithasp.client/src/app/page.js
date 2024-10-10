"use client";
import React, { useState } from 'react';
import Button from "@/components/Button";
import Input from "@/components/Input";
import SelectComponent from "@/components/Select";
import Checkbox from "@/components/Checkbox";
import Modal from "@/components/Modal";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PopOver from "@/components/PopOver";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
  { value: "aubergine", label: "Aubergine" },
  { value: "broccoli", label: "Broccoli" },
  { value: "carrot", label: "Carrot" },
  { value: "lettuce", label: "Lettuce" },
  { value: "spinach", label: "Spinach" },
];

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Welcome to My App" subtitle="This is a subtitle" />
      <Container className="flex-grow">
        <Section title="Main Section">
          <Card title="Interactive Elements">
            <Button tooltip={"Welcome"} onClick={() => setModalOpen(true)}>Open Modal</Button>
          </Card>
        </Section>

        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Interactive Elements">
          <Input placeholder="Enter text" className="mt-4" />
          <SelectComponent
            options={options}
            defaultValue={options[0].value}
          />
          <Checkbox label="Accept terms" className="mt-4" />
        </Modal>

        <Section title="Additional Information">
          <Card title="Card Title">
            <p>This is a card content.</p>
          </Card>
        </Section>

        <Section title="Popover Example">
          <PopOver triggerText="More info">
            <p>This is some more info inside a popover.</p>
          </PopOver>
        </Section>
      </Container>
      <Footer>
        <p>&copy; 2023 My App. All rights reserved.</p>
      </Footer>
    </div>
  );
}
