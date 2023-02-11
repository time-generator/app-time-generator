import {
    Editable,
    EditableInput,
    EditablePreview,
    ButtonGroup,
    IconButton,
    Flex,
    useEditableControls,
    Input,
} from "@chakra-ui/react";
import { CheckIcon, XMarkIcon, PencilIcon } from "@heroicons/react/24/outline";

/* Here's a custom control */
export default function EditableControls() {
    const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
        <ButtonGroup justifyContent="center" size="sm">
            <IconButton
                aria-label="check"
                icon={<CheckIcon />}
                {...getSubmitButtonProps()}
            />
            <IconButton
                aria-label="close"
                icon={<XMarkIcon />}
                {...getCancelButtonProps()}
            />
        </ButtonGroup>
    ) : (
        <Flex justifyContent="center">
            <IconButton
                aria-label="edit"
                size="sm"
                icon={<PencilIcon />}
                {...getEditButtonProps()}
            />
        </Flex>
    );
}
