using System.Linq;
using System.Threading.Tasks;
using DesafioFULL_WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DesafioFULL_WebAPI.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _context;

        public Repository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public async Task<Title[]> GetAllTitlesAsync()
        {
            IQueryable<Title> query = _context.Titles;

            query = query.Include(tq => tq.Quota)
                    .Include(to => to.Obligator);

            query = query.AsNoTracking()
                         .OrderBy(c => c.Id);

            return await query.ToArrayAsync();
        }
        public async Task<Title> GetTitleByIdAsync(int titleId)
        {
            IQueryable<Title> query = _context.Titles;

            query = query.Include(tq => tq.Quota)
                    .Include(to => to.Obligator);

            query = query.AsNoTracking()
                         .OrderBy(Title => Title.Id)
                         .Where(Title => Title.Id == titleId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Obligator> GetObligatorByTitleIdAsync(int titleId)
        {
            IQueryable<Obligator> query = _context.Obligators;

            query = query.AsNoTracking()
                         .OrderBy(Title => Title.Id)
                         .Where(Title => Title.Id == titleId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Quota[]> GetQuotasByTitleIdAsync(int titleId)
        {
            IQueryable<Quota> query = _context.Quotas;

            query = query.AsNoTracking()
                         .OrderBy(Title => Title.Id)
                         .Where(Title => Title.Id == titleId);

            return await query.ToArrayAsync();
        }
    }
}