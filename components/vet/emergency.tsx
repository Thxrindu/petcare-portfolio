import { Phone, Clock, MapPin, Ambulance } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Emergency() {
  return (
    <section
      id='emergency'
      className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'
    >
      <div className='relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-12 text-primary-foreground sm:px-12'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-foreground/10'
        />
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-primary-foreground/10'
        />

        <div className='relative grid items-center gap-8 lg:grid-cols-2'>
          <div>
            <span className='inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-bold'>
              <span className='relative flex h-2.5 w-2.5'>
                <span className='animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75' />
                <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-foreground' />
              </span>
              Open 24 hours · 7 days a week
            </span>
            <h2 className='mt-5 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl'>
              Pet emergency? We&apos;re here right now.
            </h2>
            <p className='mt-4 max-w-lg text-lg leading-relaxed text-primary-foreground/85'>
              Our emergency team is always on call. If your pet is in distress,
              don&apos;t wait — reach us instantly and we&apos;ll guide you
              through the next steps.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Button
                size='lg'
                variant='secondary'
                nativeButton={false}
                className='rounded-full px-8 text-base'
                render={
                  <a
                    href='tel:5551237297'
                    //  className="flex items-center gap-2" //hydration issue fix
                  >
                    <Phone className='h-5 w-5' />
                    Call (555) 123-PAWS
                  </a>
                }
              />
              <Button
                size='lg'
                variant='outline'
                nativeButton={false}
                className='rounded-full border-primary-foreground/40 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground'
                render={<a href='#appointment'>Non-urgent booking</a>}
              />
            </div>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            {[
              {
                icon: Ambulance,
                title: 'Emergency line',
                value: 'Always answered',
              },
              { icon: Clock, title: 'Response time', value: 'Under 10 min' },
              { icon: MapPin, title: 'Location', value: '24 Willow Ave' },
              { icon: Phone, title: 'Call center', value: '(555) 123-PAWS' },
            ].map((item) => (
              <div
                key={item.title}
                className='rounded-2xl bg-primary-foreground/10 p-5 backdrop-blur-sm'
              >
                <item.icon className='h-6 w-6' />
                <p className='mt-3 text-sm text-primary-foreground/75'>
                  {item.title}
                </p>
                <p className='font-bold'>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
