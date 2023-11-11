import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

import {
    DialogClose,
    DialogContent,
    DialogRoot,
    DialogTrigger,
    Grid,
    IconButton,
} from '@radix-ui/themes'

import React, { useState } from 'react'
import './photo-grid.css'

type PhotoProps = React.ComponentProps<'img'>

export const Photo = React.forwardRef<React.ElementRef<'img'>, PhotoProps>(
    (props, forwardedRef) => {
        const { ...rest } = props

        return <img ref={forwardedRef} {...rest} />
    }
)

Photo.displayName = 'Photo'

export const PhotoGrid = ({ photos }: { photos: any[] }) => {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
        null
    )

    const handleOpenChange = (open: boolean) => {
        if (!open) {
            setSelectedPhotoIndex(null)
        }
    }

    const handleClickNext = () => {
        if (!photos.length || selectedPhotoIndex === null) return

        const nextIndex =
            selectedPhotoIndex + 1 < photos.length ? selectedPhotoIndex + 1 : 0

        setSelectedPhotoIndex(nextIndex)
    }

    const handleClickPrev = () => {
        if (!photos.length || selectedPhotoIndex === null) return

        const prevIndex =
            selectedPhotoIndex - 1 > 0 ? selectedPhotoIndex - 1 : 0

        setSelectedPhotoIndex(prevIndex)
    }

    const handlePhotoClick = (e) => {
        e.stopPropagation()

        if (e.clientX < window.innerWidth / 2) {
            handleClickPrev()
        }

        if (e.clientX > window.innerWidth / 2) {
            handleClickNext()
        }
    }

    return (
        <Grid
            asChild
            className="image-grid"
            columns={{
                initial: '1',
                xs: '2',
                sm: '3',
                md: '4',
            }}
            gap="4"
        >
            <ul>
                <DialogRoot
                    open={
                        selectedPhotoIndex === null
                            ? false
                            : photos[selectedPhotoIndex]
                    }
                    onOpenChange={handleOpenChange}
                >
                    {photos.map((photo, index) => (
                        <li key={photo.img.src} className="image-grid__item">
                            <DialogTrigger>
                                <button
                                    className="image-grid__image__expand-trigger"
                                    onClick={() => setSelectedPhotoIndex(index)}
                                >
                                    <img
                                        aria-hidden
                                        alt=""
                                        className="image-grid__image__placeholder"
                                        src={photo.base64}
                                    />
                                    <img
                                        loading="lazy"
                                        className="image-grid__image"
                                        {...photo.img}
                                    />
                                </button>
                            </DialogTrigger>
                        </li>
                    ))}
                    <DialogContent className="image-grid__image__expanded-dialog">
                        <DialogClose />

                        {selectedPhotoIndex !== null && (
                            <img
                                loading="lazy"
                                className="image-grid__image__expanded-dialog__image"
                                onClick={handlePhotoClick}
                                src={photos[selectedPhotoIndex].img.src}
                            />
                        )}

                        <IconButton
                            className="image-grid__image__control__prev"
                            variant="solid"
                            color="gray"
                            radius="full"
                        >
                            <ArrowLeftIcon />
                        </IconButton>
                        <IconButton
                            className="image-grid__image__control__next"
                            variant="solid"
                            color="gray"
                            radius="full"
                            onClick={handleClickNext}
                        >
                            <ArrowRightIcon />
                        </IconButton>
                    </DialogContent>
                </DialogRoot>
            </ul>
        </Grid>
    )
}
