import { useRef } from 'react'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  List,
  ListItem,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { mainMenu } from '../../../data'
import Link from 'next/link'

export default function DrawerNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <>
      <Button
        position={'absolute'}
        left="4"
        leftIcon={
          <Icon as={HiMenuAlt2} w={{ base: 5, lg: 7 }} h={{ base: 5, lg: 7 }} />
        }
        ref={btnRef}
        onClick={onOpen}
        colorScheme={'white'}
        color="brand.200"
        _hover={{ backgroundColor: 'brand.300' }}
      >
        <VisuallyHidden>Menu</VisuallyHidden>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <List spacing={3}>
              {mainMenu.map(({ linkText, url, type, id }) => {
                return (
                  <ListItem
                    key={id}
                    borderBottom="1px"
                    borderColor="brand.300"
                    paddingBottom="2"
                  >
                    {type === 'external' ? (
                      <a href={url}>{linkText}</a>
                    ) : (
                      <Link href={url} passHref>
                        <a onClick={() => onClose()}>{linkText}</a>
                      </Link>
                    )}
                  </ListItem>
                )
              })}
            </List>
          </DrawerBody>

          <DrawerFooter>
            <Button onClick={onClose} colorScheme="brand">
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
