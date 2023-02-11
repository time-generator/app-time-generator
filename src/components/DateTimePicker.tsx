import React, { RefObject, useState } from "react";
import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

interface DateTimePickerProps {
    label: string;
    onChange: (value: Date[]) => void;
}
const CustomInput = ({ value, defaultValue, inputRef, ...props }: any) => {
    return <Input {...props} defaultValue={defaultValue} ref={inputRef} />;
};

const DateTimePicker: React.FC<DateTimePickerProps> = ({ label, onChange }) => {
    const [dates, setDates] = useState<Date[] | null>(null);

    const handleChange = (selectedDates: Date[]) => {
        setDates(selectedDates);
        onChange(selectedDates);
    };

    return (
        <FormControl>
            <Box>
                <Flatpickr
                    options={{ mode: "range", dateFormat: "Y-m-d" }}
                    value={dates as any}
                    onChange={handleChange}
                    render={({ defaultValue, value, ...props }, ref) => {
                        return (
                            <CustomInput
                                value={value}
                                defaultValue={defaultValue}
                                inputRef={ref}
                                {...props}
                            />
                        );
                    }}
                />
            </Box>
        </FormControl>
    );
};

export default DateTimePicker;
