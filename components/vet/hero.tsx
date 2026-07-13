import Image from 'next/image';
import { Star, ShieldCheck, Heart, PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id='top' className='relative overflow-hidden'>
      {/* soft warm background shapes */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-24 -top-24 h-96 w-96 animate-blob bg-primary/15'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 animate-blob bg-accent/20'
        style={{ animationDelay: '-4s' }}
      />

      <div className='relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24'>
        <div className='animate-fade-up'>
          <span className='inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground'>
            <PawPrint className='h-4 w-4 text-primary' />
            Trusted by 12,000+ happy pets
          </span>

          <h1 className='mt-6 text-pretty font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl'>
            Because your best friend deserves the{' '}
            <span className='text-primary'>warmest care</span>
          </h1>

          <p className='mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground'>
            At Pawgress, compassion meets expertise. From routine check-ups to
            emergency care, our team treats every pet like family — with gentle
            hands and modern medicine.
          </p>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
            <Button
              size='lg'
              nativeButton={false}
              className='rounded-full px-8 text-base'
              render={<a href='#appointment'>Book an Appointment</a>}
            />
            <Button
              size='lg'
              variant='outline'
              nativeButton={false}
              className='rounded-full border-primary/30 bg-transparent px-8 text-base text-foreground'
              render={<a href='#services'>Explore Services</a>}
            />
          </div>

          <div className='mt-10 flex flex-wrap items-center gap-x-8 gap-y-4'>
            <div className='flex items-center gap-2'>
              <div className='flex'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='h-4 w-4 fill-primary text-primary' />
                ))}
              </div>
              <span className='text-sm font-semibold text-foreground'>
                4.9/5 from 2,300+ reviews
              </span>
            </div>
            <div className='flex items-center gap-2 text-sm font-semibold text-foreground'>
              <ShieldCheck className='h-5 w-5 text-accent' />
              Certified veterinary hospital
            </div>
          </div>
        </div>

        <div className='relative animate-fade-up [animation-delay:200ms]'>
          <div className='relative mx-auto aspect-square w-full max-w-md'>
            <div className='absolute inset-0 animate-blob bg-primary/25' />
            <div className='animate-float absolute inset-3 overflow-hidden rounded-[45%_55%_63%_37%/41%_44%_56%_59%]'>
              <Image
                src='/images/hero-bg.png'
                alt='A happy, healthy golden retriever'
                fill
                priority
                className='object-cover'
                sizes='(max-width: 1024px) 90vw, 40vw'
              />
              <Image
                src='/images/hero-base.png'
                alt='A happy, healthy golden retriever'
                fill
                priority
                className='object-cover'
                sizes='(max-width: 1024px) 90vw, 10vw'
              />

              {/* Left pupil */}
              <div
                className='absolute'
                style={{
                  left: '44%',
                  top: '33%',
                  width: '35',
                  height: '28px',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src='/images/pupil-left.png'
                    alt=''
                    fill
                    className='object-contain'
                  />
                </div>
              </div>

              {/* Right pupil */}
              <div
                className='absolute'
                style={{
                  left: '61%',
                  top: '41%',
                  width: '35px',
                  height: '28px',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Image
                    src='/images/pupil-right.png'
                    alt=''
                    fill
                    className='object-contain'
                  />
                </div>
              </div>
            </div>

            {/* floating badges */}
            <div className='animate-float absolute -left-2 top-10 flex items-center gap-2 rounded-2xl bg-card px-4 py-3 shadow-lg shadow-primary/10 [animation-delay:-2s]'>
              <span className='flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent'>
                <Heart className='h-4 w-4' />
              </span>
              <div className='text-left'>
                <p className='text-xs text-muted-foreground'>Wellness plans</p>
                <p className='text-sm font-bold text-foreground'>
                  Tailored care
                </p>
              </div>
            </div>

            <div className='animate-float absolute -right-2 bottom-12 flex items-center gap-2 rounded-2xl bg-card px-4 py-3 shadow-lg shadow-primary/10 [animation-delay:-3s]'>
              <span className='flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary'>
                <PawPrint className='h-4 w-4' />
              </span>
              <div className='text-left'>
                <p className='text-xs text-muted-foreground'>Open 24/7</p>
                <p className='text-sm font-bold text-foreground'>
                  Emergency vets
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
