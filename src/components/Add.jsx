import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { Box, Stack } from "@mui/system";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import ImageIcon from "@mui/icons-material/Image";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import DateRangeIcon from "@mui/icons-material/DateRange";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(45%)", md: 30 },
        }}
        onClick={handleOpen}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={300}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={4}
        >
          <Typography variant="h6" color={"gray"} textAlign="center">
            Create Post
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            gap="10px"
            marginBottom="20px"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1665578705706-f769123382ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              sx={{ width: 40, height: 40 }}
            />
            Martin
          </Box>
          <TextField
            id="outlined-multiline-static"
            label="create post"
            multiline
            rows={3}
            sx={{ width: "100%" }}
            placeholder="What's on your mind?"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddAlt1Icon color="error" />
          </Stack>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
